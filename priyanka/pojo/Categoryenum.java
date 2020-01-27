package com.app.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Categoryenum 
{
   @JsonProperty("FRUIT") FRUIT,@JsonProperty("SEASONAL_FRUITS")SEASONAL_FRUITS,
   @JsonProperty("EXOTIC_FRUITS")EXOTIC_FRUITS, @JsonProperty("SEASONAL_VEGETABLE")SEASONAL_VEGETABLE,
   @JsonProperty("TOP")TOP,@JsonProperty("HERBS")HERBS,@JsonProperty("LEAFY_VEGETABLE")LEAFY_VEGETABLE,
   @JsonProperty("EXOTIC_VEGETABLE")EXOTIC_VEGETABLE,
   @JsonProperty("EVERGREEN_VEGETABLE")EVERGREEN_VEGETABLE,@JsonProperty("DAIRY_PRODUCTS")DAIRY_PRODUCTS
}
