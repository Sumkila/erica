import { cn } from "@/lib/utils";

type Word = {
  text: string;
  color: string;
};

type NewsTickerProps = {
  words: Word[];
};

const NewsTicker = ({ words }: NewsTickerProps) => {
  const tickerContent = (
    <>
      {words.map((word, index) => (
        <span key={index} className={cn("mx-3", word.color)}>
          {word.text}
        </span>
      ))}
    </>
  );

  return (
    <div className="w-full py-4 font-code text-sm">
      <div className="h-0.5 bg-muted-foreground/30" />
      <div className="relative flex overflow-x-hidden py-2 my-1">
        <div className="flex animate-marquee whitespace-nowrap">
          {tickerContent}
          {tickerContent}
          {tickerContent}
          {tickerContent}
        </div>
      </div>
      <div className="h-0.5 bg-muted-foreground/30" />
    </div>
  );
};

export default NewsTicker;
