import dynamic from 'next/dynamic';

const SwitchButton = dynamic(() => import('./SwitchButton'), { ssr: false });

export default SwitchButton;
