import React, { useContext, useState } from 'react';
import { TextField } from '@radix-ui/themes';
import Image from 'next/image';
import { AuthContext } from '../../context/auth';
import { auth_services } from '../../services/auth';
import Cookies from 'js-cookie';

const Page = () => {
  const { router, setLoginError, setUser } = useContext(AuthContext);
  const login = async (email, password) => {
    await auth_services
      .login(email, password)
      .then((response) => {
        Cookies.set('token', response.access_token, { expires: 60 })
        Cookies.set('user-info', JSON.stringify(response), { expires: 60 })
        router.replace('/dashboard')
        setLoginError(undefined)
        setUser(response)
      })
      .catch((err) => {
        Cookies.remove('token')
        Cookies.remove('user-info')
        setUser(null)

        if (err?.response?.status === 401) {
          setLoginError('Incorrect email or password')
          return
        }
        if (err?.response?.status === 404) {
          setLoginError('No user found')
          return
        }
        setLoginError(err?.response?.data?.message)
      })
  }

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="flex flex-col justify-center items-center rounded-xl shadow-md gap-y-4 mx-auto w-96 h-96 bg-white">
        <Image src="/assets/sagligim-cepte-logo.svg" width={120} height={120} alt="AS Logo" />
        <p className="text-xl font-semibold text-gray-800 my-4">Data Analyser</p>
        <TextField.Root>
          <TextField.Slot>
            <Image src="/icons/username.png" width={20} height={20} alt="Username icon" />
          </TextField.Slot>
          <TextField.Input
            placeholder="Email"
            size={4}
            className="p-2 rounded-xl"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Slot>
            <Image src="/icons/password.png" width={20} height={20} alt="Password icon" />
          </TextField.Slot>
          <TextField.Input
            placeholder="Password"
            size={4}
            className="p-2 rounded-xl"
            type="password"
            onChange={(e) => setLoginPass(e.target.value)}
          />
        </TextField.Root>
        <button
          className="bg-blue-500 text-white text-sm p-2 rounded-xl w-3/4"
          onClick={() => login(loginEmail, loginPass)}
        > Login
        </button>
      </div>
    </div>
  );
}

export default Page;
