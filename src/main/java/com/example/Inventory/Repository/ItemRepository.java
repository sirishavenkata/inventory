package com.example.Inventory.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Inventory.Entity.Item;

public interface ItemRepository extends JpaRepository<Item,Long> {
	
	Item findByitemcode(Long code);

}
