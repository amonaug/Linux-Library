#!/bin/sh
set -e

host="db"
port="5432"

echo "⏳ Aguardando o banco de dados iniciar ($host:$port)..."

until nc -z "$host" "$port"; do
  sleep 2
done

echo "✅ Banco de dados está pronto!"
exec "$@"
