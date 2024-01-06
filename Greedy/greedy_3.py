# 각 행마다 가장 작은 수를 찾은 뒤에 그 수 중에서 가장 큰 수
#  3 3
# 3 1 2
# 4 1 4
# 2 2 2

n, m = map(int, input().split())

result = 0
for i in n:
    data = list(map(int, input().split()))
    min_value = min(data)
    result = max(result, min_value)

print(result)
