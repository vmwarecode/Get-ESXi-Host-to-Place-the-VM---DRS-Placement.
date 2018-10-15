//Get Host to place the VM
// Inputs
//  cluster  -  VC:ClusterComputeResource
// Output: VC:HostSystem    

var hosts = computeCluster.host;
var host;
for (var h in hosts) {
    if (hosts[h].runtime.connectionState.value == "connected" && hosts[h].runtime.inMaintenanceMode == false) {
        host = hosts[h];
    } else {
        System.warn(hosts[h].name+": "+hosts[h].runtime.connectionState + ", inMaintenanceMode: " + hosts[h].runtime.inMaintenanceMode);
    }
}
// Set target to last available host found in cluster
host = hosts[Math.floor(Math.random() * hosts.length)];

return host;