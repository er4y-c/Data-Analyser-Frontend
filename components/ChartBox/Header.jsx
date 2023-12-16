import React from 'react';
import classNames from 'classnames';
import IconButton from '../IconButton';

const Header = ({ title, description, noButtons }) => (
    <div className="mb-8 flex justify-between">
        <div>
          <h1 className="text-xl text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className={classNames(noButtons && 'hidden')}>
            <IconButton
              src="/icons/edit.svg"
              className="rounded-full w-8 h-8"
              alt="Edit Button"
            />
            <IconButton
              src="/icons/remove1.svg"
              className="rounded-full w-8 h-8"
              alt="Delete Button"
            />
            <IconButton
              src="/icons/info.svg"
              className="rounded-full w-8 h-8"
              alt="Help Button"
            />
        </div>
    </div>
  );

export default Header;
