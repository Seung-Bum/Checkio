# 최대한 동전 적게 주기

n = 1260  # 거스름돈
count = 0

coin_type = [500, 100, 50, 10]

for coin in coin_type:
    count = n/coin  # 해당 화폐로 거슬러 줄 수 있느 동전의 개수 세기
    n %= coin       # 나머지
    print(f"{coin} : {count}")
