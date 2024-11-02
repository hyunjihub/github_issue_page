import Button from '../Button';
import { GoMilestone } from 'react-icons/go';
import { GoSearch } from 'react-icons/go';
import { GoTag } from 'react-icons/go';
import { GoTriangleDown } from 'react-icons/go';

function IssueHeader() {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 border border-gray-300 rounded mr-3">
        <button className="flex items-center gap-1.5 py-1.5 px-3 text-sm font-semibold border-r bg-gray-100">
          Filters
          <GoTriangleDown />
        </button>
        <div className="relative w-full">
          <input
            className="w-full h-full pl-8 pr-3 outline-blue-500 text-gray-500 text-sm bg-gray-100 focus:bg-white"
            defaultValue={'is:issue is:open'}
          />
          <GoSearch className="absolute top-2 left-2" />
        </div>
      </div>
      <div className="flex border border-gray-300 rounded mr-3">
        <button className="flex items-center gap-1 py-1.5 px-4 text-sm font-semibold border-r hover:bg-gray-100">
          <GoTag className="text-base" />
          Labels
          <p className="bg-gray-200 rounded-full px-2 text-xs font-bold">10</p>
        </button>
        <button className="flex items-center gap-1 py-1.5 px-4 text-sm font-bold hover:bg-gray-100">
          <GoMilestone className="text-base" />
          Milestones
          <p className="bg-gray-200 rounded-full px-2 text-xs font-semibold">0</p>
        </button>
      </div>
      <Button bgColor={'#1f883d'} fontColor={'white'} />
    </div>
  );
}

export default IssueHeader;
