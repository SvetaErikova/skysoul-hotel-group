import clsx from 'clsx';

export const Block_element = ({ className, children, title, selection }) => {
  return (
    <section className={clsx('block block_element', className)}>
      <div class="block--wrapper">
        {title}
        {selection}
        <div class="block--elements">
          {children}
        </div>
       </div>
    </section>
  );
};
