interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ modal, children }: Props) {
  return (
    <>
      <div className="mx-auto max-w-[64rem]">{children}</div>
      {modal}
    </>
  );
}
