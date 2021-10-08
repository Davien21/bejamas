import _ from "lodash";

function formatSize(size) {
  if (size < 1000) return `${size} kb`
  if (size > 1000) return `${size / 1000} mb`
}

export { formatSize };
