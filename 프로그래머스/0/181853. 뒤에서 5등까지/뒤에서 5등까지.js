function solution(num_list) {
    return num_list.sort((a,b) => a-b ).filter((_,idx) => idx<=4)
}