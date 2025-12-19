import { links } from './navigation.js';
import clsx from 'clsx';
import { Button } from '../_ui/button/button.jsx';
import { Dropdown } from '../_ui/dropdown/dropdown.jsx';

export const Nav = ({ className, ...props }) => {
  return (
    <nav className={clsx('nav', className)} {...props}>
      {links.map((link, index) => {
        const hasChildren = link.children && link.children.length > 0;

        if (hasChildren) {
          return (
            <Dropdown
              key={link.href || index}
              className={clsx('nav--item', 'dropdown')}
            >
              <Button type={'link'} color={'secondary'} link={link.href} icon={'icon-burger'}>{link.label} </Button>
              {link.children.map((child, childIndex) => (
                <div key={child.href || childIndex} className="dropdown--item">
                  <a href={child.href}> {child.label}</a>
                </div>
              ))}
            </Dropdown>
          );
        }

        return (
          <div
            key={link.href || index}
            className={clsx('nav--item')}
          >
            <Button type={'link'} color={'secondary'} link={link.href}>{link.label} </Button>
          </div>
        );
      })}

      {/* Элемент "Ещё" для OverflowNav */}

        <Dropdown
          className={clsx('nav--item', 'nav--item-more','dropdown')} hidden>
          <Button type={'link'} color={'secondary'} icon={'icon-burger'}>Ещё</Button>
        </Dropdown>

    </nav>
  );
};
