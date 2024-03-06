package com.example.Inventory.DTO;


import java.util.Date;
import java.util.UUID;



public class userDTO {
	private Long Id;
	private String firstName;
	private String lastName;
	private String userName;
	private String password;
	private Date userDOB; 
	private Date createdOn;
	private String CreatedBy;
	
	public userDTO(){
		
	}

	public userDTO(Long id, String firstName, String lastName, String userName, String password, Date userDOB,
			Date createdOn, String createdBy) {
		super();
		Id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.password = password;
		this.userDOB = userDOB;
		this.createdOn = createdOn;
		CreatedBy = createdBy;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getUserDOB() {
		return userDOB;
	}

	public void setUserDOB(Date userDOB) {
		this.userDOB = userDOB;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public String getCreatedBy() {
		return CreatedBy;
	}

	public void setCreatedBy(String createdBy) {
		CreatedBy = createdBy;
	}

	
	
	
	
	
}
