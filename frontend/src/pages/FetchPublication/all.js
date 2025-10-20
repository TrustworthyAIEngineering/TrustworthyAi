// 实时抓取 https://huaming-chen.com/ 的 Publications 列表为字符串数组
export async function get_huaming_chen(url = "https://huaming-chen.com/", fetchOpts = {}) {
    const res = await fetch(url, fetchOpts);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    const doc = new DOMParser().parseFromString(html, "text/html");
    const norm = (s) => s.replace(/\s+/g, " ").trim();

    // 定位 “Publications/Publication” 标题
    const headings = Array.from(doc.querySelectorAll("h1,h2,h3,h4,h5,h6"));
    const pubHead = headings.find((h) => /publications?/i.test(h.textContent));
    if (!pubHead) return [];

    // 抓取该标题到下一个同级或更高标题之间的节点
    const level = Number(pubHead.tagName.slice(1));
    const scope = [];
    for (let n = pubHead.nextElementSibling; n; n = n.nextElementSibling) {
        const isH = /^H[1-6]$/.test(n.tagName);
        if (isH && Number(n.tagName.slice(1)) <= level) break;
        scope.push(n);
    }

    // 在范围内取 <li>；若没有，则兜底取较长段落
    let items = scope.flatMap((node) =>
        Array.from(node.querySelectorAll("li")).map((li) => norm(li.textContent))
    );

    if (items.length === 0) {
        const blocks = scope.flatMap((node) => Array.from(node.querySelectorAll("p,div")));
        items = blocks
            .map((el) => norm(el.textContent))
            .filter((t) => t.length > 20);
    }

    return Array.from(new Set(items)).filter(Boolean);
}
export async function get_linghan_huang(){

}