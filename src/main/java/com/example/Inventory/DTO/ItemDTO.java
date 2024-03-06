package com.example.Inventory.DTO;

import java.util.Date;

public class ItemDTO {

	private Long itemcode;
	private String itemName;
	private String Category;
	private Integer quantity;
	private String Status;
	private String createdBy;
	private Date createdOn;
	private String modifiedBy;
	private Date modifiedon;
	
	
	public ItemDTO() {
		
	}


	public ItemDTO(Long itemcode, String itemName, String category, Integer quantity, String status, String createdBy,
			Date createdOn, String modifiedBy, Date modifiedon) {
		super();
		this.itemcode = itemcode;
		this.itemName = itemName;
		Category = category;
		this.quantity = quantity;
		Status = status;
		this.createdBy = createdBy;
		this.createdOn = createdOn;
		this.modifiedBy = modifiedBy;
		this.modifiedon = modifiedon;
	}


	public Long getItemcode() {
		return itemcode;
	}


	public void setItemcode(Long itemcode) {
		this.itemcode = itemcode;
	}


	public String getItemName() {
		return itemName;
	}


	public void setItemName(String itemName) {
		this.itemName = itemName;
	}


	public String getCategory() {
		return Category;
	}


	public void setCategory(String category) {
		Category = category;
	}


	public Integer getQuantity() {
		return quantity;
	}


	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}


	public String getStatus() {
		return Status;
	}


	public void setStatus(String status) {
		Status = status;
	}


	public String getCreatedBy() {
		return createdBy;
	}


	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}


	public Date getCreatedOn() {
		return createdOn;
	}


	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}


	public String getModifiedBy() {
		return modifiedBy;
	}


	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}


	public Date getModifiedon() {
		return modifiedon;
	}


	public void setModifiedon(Date modifiedon) {
		this.modifiedon = modifiedon;
	}
	
	
	
}
