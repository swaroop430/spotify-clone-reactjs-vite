import SideMenuItem from "./SideMenuItem";
import SideMenuCard from "./SideMenuCard";
import { playlists } from "../lib/data";

const AsideMenu = () => {
  return (
    <>
      <nav className="flex flex-col flex-1 gap-2">
        <div className="bg-zinc-900 rounded-lg p-2">
          <ul>
            <SideMenuItem href="/" text="Home" />
            <SideMenuItem href="/search" text="Search" />
          </ul>
        </div>

        <div className="bg-zinc-900 rounded-lg p-2 flex-1">
          <ul>
            <SideMenuItem href="/" text="Library" />

            {playlists.map((playlist) => (
              <SideMenuCard key={playlist?.id} playlist={playlist} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AsideMenu;
