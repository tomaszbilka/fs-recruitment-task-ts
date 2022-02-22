import classes from './layout.module.css';

const Layout: React.FC = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>recruitment task</h2>
      </header>
      <main>{props.children}</main>
      <footer className={classes.footer}>
        <p>tbwebdevpl &copy; 2022</p>
      </footer>
    </>
  );
};

export default Layout;
