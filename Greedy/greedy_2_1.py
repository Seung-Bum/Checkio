import random
# m개를 더하여 가장 큰 수 만들기
# 최대 k번 더 할 수 있다.
# k는 항상 m보다 작거나 같다.
# n은 배열의 크기

# 5 8 3
n, m, k = map(int, input().split())
result = 0

# data = list(map(int, input("input:").split()))
data = [2, 4, 5, 4, 6]

# data = []
# for i in range(n):
#    data.append(random.randrange(1, 11))

data.sort()
print(data)

# 1. 첫번째, 두번째 큰수 찾기
first = data[-1]
second = data[-2]
print(first)
print(second)

# 2.
count = int(m / (k+1)) * k
count += m % (k+1)

result += (count) * first
result += (m-count) * second

print(result)
