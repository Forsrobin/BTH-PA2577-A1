# Voluem snad secrets
kubectl apply -f volumes/volume.yaml
kubectl apply -f volumes/volume_claim.yaml
kubectl apply -f secrets/secrets.yaml


kubectl apply -f postgres/postgres.yaml
kubectl apply -f postgres/postgres_service.yaml

# Backend stuff
kubectl apply -f backend/backend.yaml
kubectl rollout restart -f backend/backend.yaml
kubectl apply -f backend/backend_service.yaml

# Frontend stuff
kubectl apply -f frontend/frontend.yaml
kubectl rollout restart -f frontend/frontend.yaml
kubectl apply -f frontend/frontend_service.yaml

# Ingress
kubectl apply -f ingress/ingress.yaml