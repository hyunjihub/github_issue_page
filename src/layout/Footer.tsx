import { FaGithub } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="pt-10 px-4 pb-2 mt-10 flex justify-center">
      <div className="flex items-center gap-3">
        <FaGithub className="text-2xl opacity-50 hover:opacity-30" />
        <ul className="flex gap-5 text-xs">
          <li>ⓒ 2024 GitHub, Inc.</li>
          <li className="hover:text-blue-700 hover:underline">Terms</li>
          <li className="hover:text-blue-700 hover:underline">Privacy</li>
          <li className="hover:text-blue-700 hover:underline">Security</li>
          <li className="hover:text-blue-700 hover:underline">Status</li>
          <li className="hover:text-blue-700 hover:underline">Docs</li>
          <li className="hover:text-blue-700 hover:underline">Contact</li>
          <li className="hover:text-blue-700 hover:underline">Manage cookies</li>
          <li className="hover:text-blue-700 hover:underline">Do not share my personal information</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
