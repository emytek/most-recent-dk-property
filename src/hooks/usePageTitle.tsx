export default function usePageTitle() {
  const setPageTitle = (title: string) => {
    document.title = title;
  };
  return { setPageTitle };
}
