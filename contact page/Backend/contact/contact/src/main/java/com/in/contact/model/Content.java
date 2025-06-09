package com.in.contact.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Content {

	 @Id
	 private String keyName;    
	 private String value;
	 
	public String getKeyName() {
		return keyName;
	}
	public void setKeyName(String keyName) {
		this.keyName = keyName;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	 
	 
}
