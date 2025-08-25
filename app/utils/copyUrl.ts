// Utility to copy the current URL or a provided link to the clipboard
export default (link?: string) => {
    if (!import.meta.client) return;
    navigator.clipboard.writeText(link ?? window.location.href);
};
