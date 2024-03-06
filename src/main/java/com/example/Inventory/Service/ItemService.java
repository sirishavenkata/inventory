package com.example.Inventory.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Inventory.DTO.ItemDTO;
import com.example.Inventory.DTO.userDTO;
import com.example.Inventory.Entity.Item;
import com.example.Inventory.Repository.ItemRepository;

@Service
public class ItemService {

@Autowired
private ItemRepository itemrepo;

public void saveItem( ItemDTO itemdto) {
	Item item=new Item();
	item.setCategory(itemdto.getCategory());
	item.setItemName(itemdto.getItemName());
	item.setStatus(itemdto.getStatus());
	item.setQuantity(itemdto.getQuantity());
	item.setCreatedBy(itemdto.getCreatedBy());
	item.setCreatedOn(itemdto.getCreatedOn());
	item.setModifiedBy(itemdto.getModifiedBy());
	item.setModifiedon(itemdto.getModifiedon());
	
	itemrepo.save(item);

}

private ItemDTO convertItemEntityToDTO(Item item) {
	ItemDTO itemdto=new ItemDTO();
	itemdto.setItemcode(item.getItemcode());
	itemdto.setCategory(item.getCategory());
	itemdto.setItemName(item.getItemName());
	itemdto.setQuantity(item.getQuantity());
	itemdto.setStatus(item.getStatus());
	
	return itemdto;
}

public List<ItemDTO> findAllItems(){
	List<Item> items=itemrepo.findAll();
	return items.stream().map((item)->convertItemEntityToDTO(item)).collect(Collectors.toList());
}

public void deleteitem(List<Long> Ids) {
	itemrepo.deleteAllById(Ids);
}


}
