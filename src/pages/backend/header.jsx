import MainWithoutBreadcrumbs from '../../layouts/MainWithoutBreadcrumbs.jsx';
import { metaPages } from '../../shared/meta-pages.js';
import { Header } from '../../components/header/header-comp.jsx';

export default function Home() {
  return (
    <MainWithoutBreadcrumbs meta={metaPages.home}>
      <style jsx>{`
        .header {
          position: static !important;
        }
      `}</style>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={'background-color: var(--bg-footer);'}>
        <Header transparent={true}></Header>
      </div>
      <br></br>
      <br></br>
    </MainWithoutBreadcrumbs>
  );
}
