import Image from "next/image";

type Props = {
  chain: string;
  size?: number;
};

const logoMap: Record<string, string> = {
  Avalanche: "/avalanche.png",
  Base: "/base.png",
  Celo: "/celo.png",
  Ethereum: "/ethereum.png",
  Starknet: "/starknet.png",
  Mantle: "/mantle-logo.png",
  Stellar: "/stellar-logo.png",
};

export default function ChainLogo({ chain, size = 28 }: Props) {
  const src = logoMap[chain];

  if (src) {
    return (
      <Image
        src={src}
        alt={`${chain} logo`}
        width={size}
        height={size}
        className="rounded-full"
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-full border border-line bg-elevated text-[10px] font-bold text-muted"
      style={{ width: size, height: size }}
    >
      {chain.slice(0, 2).toUpperCase()}
    </div>
  );
}
