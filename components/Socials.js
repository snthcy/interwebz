import {
    FaGithub,
    FaTwitter,
    FaSpotify,
    FaSteam,
    FaKeybase
} from "react-icons/fa";
import config from "../lib/config";

function Socials(props) {
    return (
        <a
            {...props}
            target="_blank"
            rel="noopener"
            className="hover:text-pink-300 transform transition duration-300 ease-in-out scale-100 text-white dark:text-black dark:hover:text-pink-300 transform transition duration-300 ease-in-out"
        >
            {props.children}
        </a>
    );
}

export default function SocialLinks() {
    return (
        <div className="flex text-2xl justify-between max-w-xs">
            <Socials href={config.social.twitter} alt="twitter">
                <FaTwitter/>
            </Socials>
            <Socials href={config.social.github} alt="github">
                <FaGithub/>
            </Socials>
            <Socials href={config.social.keybase} alt="keybase">
                <FaKeybase/>
            </Socials>
            <Socials href={config.social.steam} alt="steam">
                <FaSteam/>
            </Socials>
            <Socials href={config.social.spotify} alt="spotify">
                <FaSpotify/>
            </Socials>
        </div>
    );
}