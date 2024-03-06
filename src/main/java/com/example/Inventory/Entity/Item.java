package com.example.Inventory.Entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Itemid")
	private Long itemcode;
	
	private String itemName;
	private String Category;
	private Integer quantity;
	private String Status;
	private String createdBy;
	private Date createdOn;
	private String modifiedBy;
	private Date modifiedon;
	
	public Item() {
		
	}

	public Item(Long itemcode, String itemName, String category, Integer quantity, String status, String createdBy,
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
