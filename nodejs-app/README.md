# Instructions:
# 1. Replace <IMAGE_NAME> in deployment.yaml with your DockerHub image (e.g., username/nodejs-app:latest)
# 2. Add the following secrets to your GitHub repository:
#    - DOCKERHUB_USERNAME
#    - DOCKERHUB_TOKEN
#    - KUBE_CONFIG_DATA (base64 encoded kubeconfig)
# 3. Push to main branch to trigger CI/CD
