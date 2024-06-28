# Getting Started

Make sure that each of these processes are complete before moving to the next one. Don't chain these commands because it can lead to strange behaviors
`kubectl create ns planner`

`helm upgrade --install planner ./chart -n planner`

`kubectl port-forward service/planner-sprint-planner -n planner 8080`

Once this last command finishes running and you can confirm the cluster is running `watch kubectl get pods -A` you should be able to visit [localhost:8080](localhost:8080)

## Required packages

``

## Troubleshooting

#### Check if you have k8s regcred set up

`kubectl get secret regcred --output="jsonpath={.data.\.dockerconfigjson}" | base64 --decode`

#### Delete any lingering helm instances locally

`helm ls -a --all-namespaces | awk 'NR > 1 { print  "-n "$2, $1}' | xargs -L1 helm delete`

#### Delete/Force restart k8s

`kubectl delete pods --all -A`

#### Making changes to helm Chart?

`helm upgrade --install sprint-planner ./chart --values ./chart/values.yaml --namespace default
`
