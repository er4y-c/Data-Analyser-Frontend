import React from 'react'
import DashboardContainer from '../../../components/DashboardContainer'
import { boards } from '../../../utils';
import BoardCard from '../../../components/BoardCard';

const Boards = () => (
  <DashboardContainer>
    <p className="text-2xl text-gray-800 my-16">Boards</p>
    <div className="flex flex-wrap gap-x-4">
      {boards.map((board) => (
        <BoardCard
          key={board.id}
          title={board.title}
          description={board.description}
          location={`/dashboard/boards/${board.id}`}
          icon={board.icon}
        />
      ))}
    </div>
  </DashboardContainer>
);

export default Boards;
