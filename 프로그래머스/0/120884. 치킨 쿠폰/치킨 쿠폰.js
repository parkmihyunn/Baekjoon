function solution(chicken) {
    let service = 0;
    let coupon = chicken;

    while (coupon >= 10) {
        let newService = Math.floor(coupon / 10);
        service += newService;
        coupon = newService + (coupon % 10);  // 남은 쿠폰 + 서비스로 받은 치킨에서 나온 쿠폰
    }

    return service;
}