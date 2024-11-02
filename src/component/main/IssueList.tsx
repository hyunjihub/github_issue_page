import { GoCheck } from 'react-icons/go';
import { GoIssueOpened } from 'react-icons/go';
import { GoTriangleDown } from 'react-icons/go';
import { Link } from 'react-router-dom';

function IssueList() {
  return (
    <div>
      <div className="flex items-center justify-between mt-3 p-4 bg-[#f6f8fa] border rounded-t-lg">
        <div className="flex items-center gap-3">
          <input type="checkbox" />
          <p className="flex items-center gap-1 text-sm font-semibold">
            <GoIssueOpened className="text-base" />0 Open
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-600">
            <GoCheck className="text-base" />0 Close
          </p>
        </div>
        <ul className="flex items-center gap-5 text-sm text-gray-600">
          <li className="flex items-center gap-1 hover:text-black">
            Author
            <GoTriangleDown />
          </li>
          <li className="flex items-center gap-1 hover:text-black">
            Label
            <GoTriangleDown />
          </li>
          <li className="flex items-center gap-1 hover:text-black">
            Project
            <GoTriangleDown />
          </li>
          <li className="flex items-center gap-1 hover:text-black">
            Milestones
            <GoTriangleDown />
          </li>
          <li className="flex items-center gap-1 hover:text-black">
            Assigns
            <GoTriangleDown />
          </li>
          <li className="flex items-center gap-1 hover:text-black">
            Sort
            <GoTriangleDown />
          </li>
        </ul>
      </div>
      <div className="border rounded-b-lg">
        <div className="py-20 px-10 flex flex-col justify-center items-center gap-1">
          <GoIssueOpened className="text-2xl text-gray-500" />
          <strong className="text-2xl font-semibold">There aren’t any open issues.</strong>
          <p className="text-gray-500">
            You could search{' '}
            <Link className="text-blue-500 hover:underline" to="https://github.com/search" target="_blank">
              all of GitHub
            </Link>{' '}
            or try an{' '}
            <Link className="text-blue-500 hover:underline" to="https://github.com/search/advanced" target="_blank">
              advanced search.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default IssueList;
