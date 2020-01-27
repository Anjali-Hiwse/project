package com.app.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Role {
	
 @JsonProperty("ADMIN")ADMIN,@JsonProperty("SHOP_MANAGER")SHOP_MANAGER,@JsonProperty("DELIVERY_PERSON")DELIVERY_PERSON,@JsonProperty("SUPPORT_STAFF")SUPPORT_STAFF,@JsonProperty("CUSTOMER")CUSTOMER
}
