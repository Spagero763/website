type Props = {
  chain: string;
  size?: number;
};

export default function ChainLogo({ chain, size = 28 }: Props) {
  const s = size;

  const logos: Record<string, JSX.Element> = {
    Avalanche: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L2 20H8.5L12 13.8L15.5 20H22L12 2Z"
          fill="#E84142"
        />
        <path
          d="M12 8.4L8.8 14.5H10.5L12 11.5L13.5 14.5H15.2L12 8.4Z"
          fill="white"
          opacity="0.4"
        />
      </svg>
    ),
    Base: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#0052FF" />
        <path
          d="M12 6C8.7 6 6 8.7 6 12S8.7 18 12 18c2.9 0 5.4-2 6.1-4.8H12V12h8.1c.1.7.1 1.3 0 2C19.4 17.7 16 21 12 21 7 21 3 17 3 12S7 3 12 3c3.7 0 6.9 2.1 8.5 5.2L12 8.2V6Z"
          fill="white"
          opacity="0"
        />
        <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="900" fill="white" fontFamily="Arial">B</text>
      </svg>
    ),
    Starknet: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#EC796B" opacity="0.15" />
        <path
          d="M12 3L14.5 8.5L20.5 9.5L16 14L17.5 20L12 17L6.5 20L8 14L3.5 9.5L9.5 8.5L12 3Z"
          fill="#EC796B"
          stroke="#EC796B"
          strokeWidth="0.5"
        />
      </svg>
    ),
    Celo: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#35D07F" />
        <path
          d="M16 8.5C14.7 7.2 12.9 6.5 11 6.5C7.4 6.5 4.5 9.4 4.5 13S7.4 19.5 11 19.5c1.9 0 3.7-.8 5-2L14.5 16c-.9.9-2.1 1.5-3.5 1.5C8.5 17.5 6.5 15.5 6.5 13S8.5 8.5 11 8.5c1.4 0 2.6.6 3.5 1.5L16 8.5Z"
          fill="white"
          opacity="0.9"
        />
        <line x1="11" y1="6.5" x2="11" y2="19.5" stroke="white" strokeWidth="1.5" opacity="0.9" />
        <line x1="4.5" y1="13" x2="17.5" y2="13" stroke="white" strokeWidth="1.5" opacity="0.9" />
      </svg>
    ),
    Ethereum: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 5,12.5 12,16 19,12.5" fill="#627EEA" opacity="0.8" />
        <polygon points="12,16 5,12.5 12,22" fill="#627EEA" opacity="0.6" />
        <polygon points="12,16 19,12.5 12,22" fill="#627EEA" opacity="0.4" />
        <polygon points="12,2 12,16 19,12.5" fill="#627EEA" />
      </svg>
    ),
  };

  return logos[chain] ?? (
    <div
      className="rounded-full flex items-center justify-center text-[10px] font-bold"
      style={{ width: s, height: s, background: "rgba(148,163,184,0.1)" }}
    >
      {chain.slice(0, 2).toUpperCase()}
    </div>
  );
}
