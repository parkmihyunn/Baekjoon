function solution(str_list) {
  if (str_list.indexOf("l") === -1 && str_list.indexOf("r") === -1) return [];
  if (str_list.indexOf("l") === -1)
    return str_list.slice(str_list.indexOf("r") + 1);
  if (str_list.indexOf("r") === -1)
    return str_list.slice(0, str_list.indexOf("l"));
  return str_list.indexOf("l") < str_list.indexOf("r")
    ? str_list.slice(0, str_list.indexOf("l"))
    : str_list.slice(str_list.indexOf("r") + 1);
}