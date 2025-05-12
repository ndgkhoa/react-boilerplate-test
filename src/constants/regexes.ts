export const regexes = {
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
  viagsEmail: /^[a-zA-Z0-9._%+-]+@viags\.vn$/i,
  iso8601Regex: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
  approver: /^[a-zA-Z0-9._-]+@viags\.vn\|[^\r\n]+$/,
};
