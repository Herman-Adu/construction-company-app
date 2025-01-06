interface SectionSplitProps {
  children: React.ReactNode;
}

export const SectionSplit = ({ children }: SectionSplitProps) => {
  return (
    <div className="bg-[#F6FCCF] py-8 md:py-32 space-y-12 md:space-y-32">
      {children}
    </div>
  );
};
