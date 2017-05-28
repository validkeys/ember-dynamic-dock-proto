### Live Bar Sandbox

Just a sandbox to work through some ideas:

1. A main service called "live bar" and corresponding component (live-bar/x-container)
2. 2 "sub services" Chat, Notifictions

The idea is that the "live bar" component is a dynamic view handler for real-time activity. It acts almost like the "dock" on a mac. Applications can register to be in the livebar by passing through the name and icon. When the individual apps in the livebar have updates they can update their "badgeCount" in the livebar.

Each "sub-service" contains a corresponding app. When any app is clicked in the live bar, the live bar service sets the selected app to be the "active app". It then renders the active app's corresponding component dynamically and passes any args along with it.

Finally, in order for each "app" to register with the live-bar, each app must have a "register" method. Registering each app in the live-bar instance-initializer is how we can ensure that certain apps are registered from the get go.
