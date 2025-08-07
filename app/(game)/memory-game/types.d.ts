export interface MemoryCardSize {
  width: number;
  height: number;
}

export interface MemoryCardState {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  open: boolean;
  done: boolean;
  type: string;
}
