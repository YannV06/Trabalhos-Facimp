package atv6;

public class Carro extends Veiculo{
	String placa;
	public Carro(String marca, String modelo,String placa) {
		super(marca, modelo, 4);
		this.placa=placa;
		
	}
	public void ligar() {
		System.out.println("O carro "+ modelo + "foi ligado");
		
	}
	public void desligar() {
		System.out.println("O carro"+ modelo + " foi desligado");
		
	}
	public void abastecer() {
		System.out.println("O carro"+ modelo + "foi abastecido");
	}
	
	@Override
	public void info() {
		System.out.println("Carro:");
		System.out.println("Marca "+ marca);
		System.out.println("Modelo"+ modelo);
		System.out.println("Placa"+ placa);
		System.out.println("Rodas"+ rodas);
	}
}
