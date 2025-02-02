interface Props {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const Info: React.FC<Props> = ({ title, description, className }) => {
  return (
    <div className={className}>
      {title && <div className="font-semibold">{title}</div>}
      {description && (
        <div className="text-sm text-neutral-500">{description}</div>
      )}
    </div>
  );
};

export default Info;
