export default function formatKeyText(key) {
    while (key.includes("_")) {
        key = key.replace("_", " ");
    }
    return key;
}
