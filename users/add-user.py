#!/usr/bin/env python3
"""Add or update a user in users.json.

Usage: python3 add-user.py <username> <password>
"""
import hashlib
import json
import sys
import os

USERS_FILE = os.path.join(os.path.dirname(__file__), "users.json")


def main():
    if len(sys.argv) != 3:
        print("Usage: python3 add-user.py <username> <password>")
        sys.exit(1)

    username = sys.argv[1].strip().lower()
    password = sys.argv[2]
    digest = hashlib.sha256(f"{username}:{password}".encode()).hexdigest()

    with open(USERS_FILE) as f:
        users = json.load(f)

    users = [u for u in users if u["username"] != username]
    users.append({"username": username, "hash": digest})
    users.sort(key=lambda u: u["username"])

    with open(USERS_FILE, "w") as f:
        json.dump(users, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print(f"Added/updated user '{username}'.")


if __name__ == "__main__":
    main()
