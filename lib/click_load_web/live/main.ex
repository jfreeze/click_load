defmodule Dash do
  defstruct [:name, :id]
end

defmodule ClickLoadWeb.DashLive.Main do
  use ClickLoadWeb, :live_view

  defstruct name: "init", id: 99

  @dashes [%Dash{name: "José", id: 1}, %Dash{name: "Chris", id: 2}]

  @impl true
  def mount(_params, _session, socket) do
    IO.puts("mounting ..........")
    {:ok, assign(socket, dash: %__MODULE__{}, dashes: @dashes)}
  end

  @impl true
  def handle_params(%{"id" => id}, _url, socket) do
    IO.puts("handle_params: id: #{id}")
    dash = Enum.find(@dashes, fn d -> "#{d.id}" == id end)
    IO.inspect(dash, label: "dash")
    {:noreply, assign(socket, dash: dash)}
  end

  def handle_params(x, _params, socket) do
    IO.inspect(x)
    {:noreply, socket}
  end
end
