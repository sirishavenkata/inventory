package com.example.Inventory.DTO;

public class LoginDTO {
	
	private String userName;
	private String Password; 
	
	public LoginDTO() {
		
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public LoginDTO(String userName, String password) {
		super();
		this.userName = userName;
		Password = password;
	}

}
