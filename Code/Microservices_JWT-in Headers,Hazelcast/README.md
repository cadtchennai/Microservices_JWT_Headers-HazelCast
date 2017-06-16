Microservices with JWT headers and hazelcast for cacheing

They can be imported as maven projects.


OnlineShoppingCart	8000	OnlineShoppingCart.java,
AuthService	8001	AuthService.java,
CatalogueService	8022	CatalogueService.java,
ShippingService	8084	ShippingService.java,
OrderService	8088	OrderService.java

All the services should be executed for executing Online Shopping Cart service.

After all the services are running, application can be executed with following url in the browser:

http://172.18.33.34:8000/

Username : admin/test/user,
Password : password

Hazelcast:
Note: 

1.Before running the application have to start the web/application server where the mancenter.war is deployed
2. Run start.bat file under <hazelcast_home>/bin directory to start the member
(refer hazelcast installation documentation for installing and starting hazelcast server )

