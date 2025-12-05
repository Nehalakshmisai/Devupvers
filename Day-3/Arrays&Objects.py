from functools import reduce
users = [
    {"name": "Alice", "age": 25, "role": "Developer"},
    {"name": "Bob", "age": 30, "role": "Designer"},
    {"name": "Charlie", "age": 22, "role": "Developer"},
    {"name": "David", "age": 30, "role": "Manager"}
]
age_filtered = list(filter(lambda user: user["age"] > 25, users))
print("Users older than 25:", age_filtered)
name_filtered = list(filter(lambda user: user["name"].startswith("A"), users))
print("Users with name starting with A:", name_filtered)
user_names = list(map(lambda user: user["name"], users))
print("All user names:", user_names)

total_age = reduce(lambda acc, user: acc + user["age"], users, 0)
print("Total age of all users:", total_age)

for user in users:
    user["active"] = True

print("Updated users with 'active' key:", users)
