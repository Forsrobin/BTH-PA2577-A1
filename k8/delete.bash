kubectl delete -f secrets/secrets.yaml
kubectl delete -f postgres/postgres.yaml
kubectl delete -f postgres/postgres_service.yaml
kubectl delete -f backend/backend.yaml
kubectl delete -f frontend/frontend.yaml
kubectl delete -f hpa/frontend.yaml