import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGoogle, 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

interface SocialIconProps {
  platform: 'google' | 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'youtube';
  href: string;
  target?: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform, href, target, className = '' }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'google':
        return faGoogle;
      case 'facebook':
        return faFacebook;
      case 'twitter':
        return faTwitter;
      case 'linkedin':
        return faLinkedin;
      case 'instagram':
        return faInstagram;
      case 'youtube':
        return faYoutube;
      default:
        return faGoogle;
    }
  };

  return (
    <li>
      <a href={href} target={target} className={`transition-all hover:scale-110 ${className}`}>
        <FontAwesomeIcon 
          icon={getIcon(platform)} 
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          size="lg"
        />
      </a>
    </li>
  );
};

export default SocialIcon;
