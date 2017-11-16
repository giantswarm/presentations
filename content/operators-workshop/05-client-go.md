<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

# Kubernetes client-go

---

# Packages

- `k8s.io/client-go` package
- https://github.com/kubernetes/client-go
- Code is synced from staging area of Kubernetes codebase
- Uses k8s.io/apimachinery which is shared by the client and server

---

# Sub packages

- `kubernetes` - clientset for the Kubernetes API 
- `discovery` - discover APIs supported by a API server
- `tools/cache` - for writing controllers

---

# Versioning

- Uses semver.
- client-go 4.0 targets Kubernetes 1.7
- client-go 5.0 targets Kubernetes 1.8
- Use a dependency management tool like glide or dep

---

# Authenticating inside cluster

- Uses Service Account Token mounted inside the pod

```go
import "k8s.io/client-go/rest"

config, _ := rest.InClusterConfig()
clientset, _ := kubernetes.NewForConfig(config)
```

---

# Authenticating outside cluster

- Provide TLS certificates or a kubeconfig file

```go
import "k8s.io/client-go/tools/clientcmd"

config, _ := clientcmd.BuildConfigFromFlags("", *kubeconfig)
clientset, _ := kubernetes.NewForConfig(config)
```

---

# Accessing resources

- List Pods

```go
pods, err := clientset.CoreV1().Pods("").List(metav1.ListOptions{})
```

- Get Deployment

```go
deploy, err := clientset.Extensions().Deployments(namespace).Get(name,
    apismetav1.GetOptions{})
```

---

# Watchers

- Implements the Kubernetes Watch API for a resource
- k8s.io/apimachinery/watch
- Watch event types
  - Added
  - Modified
  - Deleted
  - Error

---

# Informers

- Provided by tools/cache package
- Informer has its own cache
- SharedInformer uses a shared cache
- Used in the Kubernetes code base

---

# Event Handlers

- Informers provides event handlers
  - AddFunc
  - DeleteFunc
  - UpdateFunc

---

# Resync Period

- Configurable period when all resources will be reprocessed.
- Resources are also reprocessed when the operator is restarted.

